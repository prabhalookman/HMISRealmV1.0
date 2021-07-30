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


import { ObjectId } from 'bson';
import Site from '../model/site'

let GetQuery = async (qryData) => {
    try {
        let newSite = new Site();
        let clientKeys = Object.keys(qryData);
        let i = 0;
        let suffixes = ["_gt", "_gte", "_lt", "_lte", "_ne", "_in", "_nin", "_exists"];
        let obj = { $match: {} }
        while (i < clientKeys.length) {
            if (clientKeys[i].includes('_') && clientKeys[i] != '_id') {
                const leng = clientKeys[i].split("_")[clientKeys[i].split("_").length - 1]
                let nam = "$" + leng;
                for (var param in qryData) {
                    obj.$match[clientKeys[i].split("_")[0]] = { ["$" + leng]: qryData[clientKeys[i]] }
                }

            } else {
                if (clientKeys[i] == '_id') {
                    obj.$match[clientKeys[i]] = ObjectId(qryData[clientKeys[i]])
                } else {
                    obj.$match[clientKeys[i]] = qryData[clientKeys[i]]
                }

            }
            i++
        }
        console.log(`obj : ${JSON.stringify(obj)} `)
        let site = await Site.aggregate([obj])
        return site
    } catch (error) {
        console.error("Error : ", error)
    }
}

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
                    if (clientKeys[i].includes('_') && clientKeys[i] != '_id') {
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
        },
        sites: async (parent, args, { models }, info) => {
            try {
                let clientKeys = Object.keys(args.query);
                let i = 0;
                let suffixes = ["_gt", "_gte", "_lt", "_lte", "_ne", "_in", "_nin", "_exists"];
                let exeQuery = { $match: {} }
                while (i < clientKeys.length) {
                    if (clientKeys[i].includes('_') && clientKeys[i] != '_id') {
                        const leng = clientKeys[i].split("_")[clientKeys[i].split("_").length - 1]
                        let nam = "$" + leng;
                        for (var param in args.query) {
                            exeQuery.$match[clientKeys[i].split("_")[0]] = { ["$" + leng]: args.query[clientKeys[i]] }
                        }

                    } else {
                        exeQuery.$match[clientKeys[i]] = args.query[clientKeys[i]]
                    }
                    i++
                }
                if(args.includes('limit')){
                    //
                }
                if(args.includes('sortBy')){
                    //
                }
                console.log(`exeQuery : ${JSON.stringify(exeQuery)} `)
                let site = await models.Site.aggregate([exeQuery])
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

                newSite = await Site.insertMany(args.data);

                let Ids = []
                newSite.forEach((rec) => {
                    Ids.push(rec._id)
                })
                console.error("Ids : ", { "insertedIds": Ids })

                return { "insertedIds": Ids }
            } catch (error) {
                console.error("Error : ", error)
            }
        },
        updateOneSite: async (parent, args, { models }, info) => {
            try {
                let resultQry = await GetQuery(args.query)
                let newSite = new models.Site(resultQry[0])

                let updateObj = { $set: {} };
                for (var param in args.set) {
                    updateObj.$set[param] = args.set[param];
                }

                newSite = await models.Site.findOneAndUpdate({ _id: newSite._id }, updateObj, { multi: true, new: true });
                return newSite
            } catch (error) {
                console.error("Error : ", error)
            }
        },
        updateManySites: async (parent, args, { models }, info) => {
            try {
                let resultQry = await GetQuery(args.query)

                let updateObj = { $set: {} };
                for (var param in args.set) {
                    updateObj.$set[param] = args.set[param];
                }
                let matched = []

                for (let i = 0; i < resultQry.length; i++) {
                    let result = await models.Site.findOneAndUpdate({ _id: resultQry[i]._id }, updateObj, { multi: true, new: true });
                    matched.push(result)
                }

                return matched

            } catch (error) {
                console.error("Error : ", error)
            }
        },
        upsertOneSite: async (parent, args, { models }, info) => {
            try {
                let resultQry = await GetQuery(args.query)
                let newSite = new models.Site(resultQry[0])

                let updateObj = { $set: {} };
                for (var param in args.data) {
                    updateObj.$set[param] = args.data[param];
                }

                newSite = await models.Site.findOneAndUpdate({ _id: newSite._id }, updateObj, { new: true, upsert: true });
                return newSite
            } catch (error) {
                console.error("Error : ", error)
            }

        },
        replaceOneSite: async (parent, args, { models }, info) => {
            try {
                let resultQry = await GetQuery(args.query)
                let newSite = new models.Site(resultQry[0])

                let updateObj = { $set: {} };
                let resultKeys = Object.keys(resultQry[0])
                var filteredAry = resultKeys.filter(function (e) { return (e !== '_id' || e !== '_v') })

                filteredAry.forEach((res) => {
                    for (var param in args.data) {
                        if (filteredAry.includes(param) || args.data.includes(res)) {
                            updateObj.$set[param] = args.data[param];
                        } else {
                            updateObj.$set[param] = null
                        }
                    }
                })

                newSite = await models.Site.findOneAndUpdate({ _id: newSite._id }, updateObj, { new: true, upsert: true });
                return newSite
            } catch (error) {
                console.error("Error : ", error)
            }

        },
        deleteOneSite: async (parent, args, { models }, info) => {
            try {
                let resultQry = await GetQuery(args.query)
                let newSite = new models.Site(resultQry[0])

                const deleteStatus = true;
                let updateObj = { deleted: deleteStatus }

                let resultSite = await models.Site.findOneAndUpdate({ _id: newSite._id }, updateObj, { new: true });
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
        deleteManySites: async (parent, args, { models }, info) => {
            try {
                let resultQry = await GetQuery(args.query)

                const deleteStatus = true;
                let updateObj = { deleted: deleteStatus }

                let matched = []

                for (let i = 0; i < resultQry.length; i++) {
                    let result = await models.Site.findOneAndUpdate({ _id: resultQry[i]._id }, updateObj, { multi: true, new: true });
                    matched.push(result)
                }

                return matched

            } catch (error) {
                console.error("Error : ", error)
            }

        }
    }
}