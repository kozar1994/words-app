const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        hello: String

        getWordById(_id: ID): Word
        getAllWords: [Word]

        getListById(_id: ID): ListConvert
        takeFewList(number: Int): [List]
        getAllList: [List]
    }

    type Mutation {
        createNewWord(input: WordInput) : Word
        createNewList(input: ListInput) : List
        updateList(input: ListUpdateInput) : List
    }

    input WordInput {
        word_en: String
        word_ua: String
    }

    input ListUpdateInput {
        _id: String
        listTitle: String
        words: [String]
    }

    input ListInput {
        listTitle: String
        words: [String]
        data: String
    }

    type Word {
        _id: ID
        word_en: String
        word_ua: String
    }

    type List {
        _id: ID
        listTitle: String
        words: [String]
        data: String
    }

    type ListConvert {
        _id: ID
        listTitle: String
        words: [Word]
        data: String
    }
`;

module.exports = typeDefs;