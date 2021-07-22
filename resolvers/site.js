export default {
    Query: {
        getSite: async (parent, args, { models }, info) => {
            try {
                let site = await models.Site.find({deleted:false})
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