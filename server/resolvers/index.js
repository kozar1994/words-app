const WordModel = require('./../models/word.model');
const ListModel = require('./../models/list.model');

const resolvers = {
    Query: {
        hello: () => {
            return 'hello';
        },

        getWordById: async (prents, {_id}) => {
            try {
                const word = await WordModel.findById({_id});
                return word;
            } catch (error) {
                console.log(error);
            }

        },
        getAllWords: async () => {
            try {
                const words = await WordModel.find();
                return words;
            } catch (error) {
                console.log(error);
            }
        },

        getListById: async (prents, {_id}) => {
            try {
                const list = await ListModel.findById({_id});
                
                const records = await WordModel.find({ '_id': { $in: list.words } }).sort({ _id: -1 });
                
                const listWords = {
                    _id: list._id,
                    listTitle: list.listTitle,
                    words: records
                }
                
                return listWords;
            } catch (error) {
                console.log(error);
            }

        },
        getAllList: async () => {
            try {
                const lists = await ListModel.find();

                console.log(lists);
                return lists;
            } catch (error) {
                console.log(error);
            }
        },

        takeFewList: async (prents, {number}) => {
            const limit = number || 10;
            try {
                const lists = await ListModel.find().limit(limit);
                return lists;
            } catch (error) {
                console.log(error);
            }
        }
    },
    Mutation: {
        createNewWord: async (prents, args) => {
            try {
                const {word_en, word_ua} = args.input;
                const word = new WordModel({word_en, word_ua});

                await word.save();
                return word;
            } catch (error) {
                console.log(error);
            }
        },
        createNewList: async (prents, args) => {
            const {
                listTitle,
                words,
                data
            } = args.input;
            const word = new ListModel({listTitle, words, data});

            try {
                await word.save();
                return word;
            } catch (error) {
                console.log(error);
            }
        },

        updateList: async (prents, args) => {
            const {
                _id,
                listTitle,
                words,
            } = args.input;

            try {
                const update = await ListModel.findOneAndUpdate({_id}, {listTitle, words, data: Date.now()});
                return update;
            } catch (error) {
                console.log(error);
            }
        }
    }
}

module.exports = resolvers;