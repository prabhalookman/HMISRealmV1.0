// function endsWithAny(suffixes, string) {
//     return suffixes.some(function (suffix) {
//         console.log(`${suffix} - ${string}`)
//         return string.endsWith(suffix);
//     });
// }

// function endsWith(str, suffix) {
//      const val = str.indexOf(suffix, str.length - suffix.length) !== -1;
//      console.log(`${str} - ${suffix} - ${val} `)
//      return
// }

//http://localhost:4000/graphql
export default {
    Query: {
        getSite: async (parent, args, { models }, info) => {
            try {
                let site = await models.Site.find({ deleted: false })
                return site
            } catch (error) {
                console.error("Error : ", error)
            }
        },
        site: async (parent, args, { models }, info) => {
            try {
                let clientKeys = Object.keys(args.query);
                let i = 0;
                let suffixes = ["_gt", "_gte", "_lt", "_lte", "_ne", "_in", "_nin", "_exists"];
                let obj = { $match: {} }
                while (i < clientKeys.length) {
                    if (clientKeys[i].includes('_')) {
                        const leng = clientKeys[i].split("_")[clientKeys[i].split("_").length - 1]
                        let nam = "$" + leng;
                        for (var param in args.query) {
                            obj.$match[clientKeys[i].split("_")[0]] = { ["$" + leng]: args.query[clientKeys[i]] }
                            console.log(`obj Inside: ${JSON.stringify(obj)} `)
                        }

                    } else {
                        obj.$match[clientKeys[i]] = args.query[clientKeys[i]]
                    }
                    i++
                }
                console.log(`obj : ${JSON.stringify(obj)} `)
                let site = await models.Site.aggregate(obj)
                return site                
            } catch (error) {
                console.error("Error : ", error)
            }
        }
    },
    Mutation: {
        addSite: async (parent, args, { models }, info) => {
            try {
                let newSite = new models.Site();
                let clientKeys = Object.keys(args.input);
                if (!clientKeys)
                    console.log("Error Site keys")
                let i = 0;
                while (i < clientKeys.length) {
                    if (clientKeys[i] in newSite) {
                        newSite[clientKeys[i]] = args.input[clientKeys[i]]
                    }
                    i++
                }

                newSite = await newSite.save();
                console.log("newSite Created : ", newSite)

                return newSite
            } catch (error) {
                console.error("Error : ", error)
            }

        },
        updateSite: async (parent, args, { models }, info) => {
            try {
                let updateObj = { $set: {} };
                for (var param in args.input) {
                    updateObj.$set[param] = args.input[param];
                }
                const resultSite = await models.Site.findOneAndUpdate({ _id: args.siteID }, updateObj, { new: true });

                console.log("resultSite created : ", resultSite)

                return resultSite
            } catch (error) {
                console.error("Error : ", error)
            }

        },
        deleteSite: async (parent, args, { models }, info) => {
            try {
                args = args.siteID;
                const deleteStatus = true;
                let updateObj = { deleted: deleteStatus }

                let resultSite = await models.Site.findOneAndUpdate({ _id: args }, updateObj, { new: true });
                if (resultSite) {
                    return resultSite;
                } else {
                    console.log("Error Delet Site")
                }
                return resultSite
            } catch (error) {
                console.error("Error : ", error)
            }

        },
    }
}