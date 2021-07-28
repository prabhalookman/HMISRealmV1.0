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

import Site from '../model/site'
export default {
    Query: {
        getSite: async (parent, args, { models }, info) => {
            try {
                let site = await models.Site.find({})
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
                        }

                    } else {
                        obj.$match[clientKeys[i]] = args.query[clientKeys[i]]
                    }
                    i++
                }
                console.log(`obj : ${JSON.stringify(obj)} `)
                let site = await models.Site.aggregate([obj])
                return site                
            } catch (error) {
                console.error("Error : ", error)
            }
        }
    },
    Mutation: {
        insertOneSite: async (parent, args, { models }, info) => {
            try {
                let newSite = new models.Site();
                let clientKeys = Object.keys(args.data);
                if (!clientKeys)
                    console.log("Error Site keys")
                let i = 0;
                while (i < clientKeys.length) {
                    if (clientKeys[i] in newSite) {
                        newSite[clientKeys[i]] = args.data[clientKeys[i]]
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

        insertManySites: async (parent, args, { models }, info) => {
            try {
                let newSite = new Site();                
                
                //let emp = {}
                //let tempAr = [];                
                // args.data.forEach((dat) => {
                //     let clientKeys = Object.keys(dat);
                //     if (!clientKeys)
                //         console.log("Error Site keys")
                //     let i = 0;
                //     while (i < clientKeys.length) {
                //         if (clientKeys[i] in newSite) {
                //             emp[clientKeys[i]] = dat[clientKeys[i]]
                //         }
                //         tempAr.push(emp)
                //         i++
                //     }
                // })

                newSite = await Site.insertMany(args.data);                
                
                let Ids = []
                newSite.forEach((rec)=>{
                    Ids.push(rec._id)
                })
                console.error("Ids : ", {"insertedIds":Ids})
                
                return {"insertedIds":Ids}
            } catch (error) {
                console.error("Error : ", error)
            }
        },
        updateOneSite: async (parent, args, { models }, info) => {
            try {
                let newSite = new Site(); 

                newSite = await Site.insertMany(args.data);                
                
                let Ids = []
                newSite.forEach((rec)=>{
                    Ids.push(rec._id)
                })
                console.error("Ids : ", {"insertedIds":Ids})
                
                return {"insertedIds":Ids}
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