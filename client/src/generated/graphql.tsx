import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type List = {
  __typename?: 'List';
  _id?: Maybe<Scalars['ID']>;
  listTitle?: Maybe<Scalars['String']>;
  words?: Maybe<Array<Maybe<Scalars['String']>>>;
  data?: Maybe<Scalars['String']>;
};

export type ListConvert = {
  __typename?: 'ListConvert';
  _id?: Maybe<Scalars['ID']>;
  listTitle?: Maybe<Scalars['String']>;
  words?: Maybe<Array<Maybe<Word>>>;
  data?: Maybe<Scalars['String']>;
};

export type ListInput = {
  listTitle?: Maybe<Scalars['String']>;
  words?: Maybe<Array<Maybe<Scalars['String']>>>;
  data?: Maybe<Scalars['String']>;
};

export type ListUpdateInput = {
  _id?: Maybe<Scalars['String']>;
  listTitle?: Maybe<Scalars['String']>;
  words?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createNewWord?: Maybe<Word>;
  createNewList?: Maybe<List>;
  updateList?: Maybe<List>;
};


export type MutationCreateNewWordArgs = {
  input?: Maybe<WordInput>;
};


export type MutationCreateNewListArgs = {
  input?: Maybe<ListInput>;
};


export type MutationUpdateListArgs = {
  input?: Maybe<ListUpdateInput>;
};

export type Query = {
  __typename?: 'Query';
  hello?: Maybe<Scalars['String']>;
  getWordById?: Maybe<Word>;
  getAllWords?: Maybe<Array<Maybe<Word>>>;
  getListById?: Maybe<ListConvert>;
  takeFewList?: Maybe<Array<Maybe<List>>>;
  getAllList?: Maybe<Array<Maybe<List>>>;
};


export type QueryGetWordByIdArgs = {
  _id?: Maybe<Scalars['ID']>;
};


export type QueryGetListByIdArgs = {
  _id?: Maybe<Scalars['ID']>;
};


export type QueryTakeFewListArgs = {
  number?: Maybe<Scalars['Int']>;
};

export type Word = {
  __typename?: 'Word';
  _id?: Maybe<Scalars['ID']>;
  word_en?: Maybe<Scalars['String']>;
  word_ua?: Maybe<Scalars['String']>;
};

export type WordInput = {
  word_en?: Maybe<Scalars['String']>;
  word_ua?: Maybe<Scalars['String']>;
};

export type CreateNewListMutationMutationVariables = Exact<{
  createNewListInput?: Maybe<ListInput>;
}>;


export type CreateNewListMutationMutation = { __typename?: 'Mutation', createNewList?: Maybe<{ __typename?: 'List', _id?: Maybe<string>, listTitle?: Maybe<string>, words?: Maybe<Array<Maybe<string>>>, data?: Maybe<string> }> };

export type UpdateListMutationMutationVariables = Exact<{
  updateListInput?: Maybe<ListUpdateInput>;
}>;


export type UpdateListMutationMutation = { __typename?: 'Mutation', updateList?: Maybe<{ __typename?: 'List', _id?: Maybe<string>, listTitle?: Maybe<string>, words?: Maybe<Array<Maybe<string>>> }> };

export type CreateNewWordMutationMutationVariables = Exact<{
  createNewWordInput?: Maybe<WordInput>;
}>;


export type CreateNewWordMutationMutation = { __typename?: 'Mutation', createNewWord?: Maybe<{ __typename?: 'Word', _id?: Maybe<string>, word_en?: Maybe<string>, word_ua?: Maybe<string> }> };

export type GetAllListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllListQuery = { __typename?: 'Query', getAllList?: Maybe<Array<Maybe<{ __typename?: 'List', listTitle?: Maybe<string>, words?: Maybe<Array<Maybe<string>>>, data?: Maybe<string>, _id?: Maybe<string> }>>> };

export type GetListByIdQueryVariables = Exact<{
  getListByIdId?: Maybe<Scalars['ID']>;
}>;


export type GetListByIdQuery = { __typename?: 'Query', getListById?: Maybe<{ __typename?: 'ListConvert', _id?: Maybe<string>, listTitle?: Maybe<string>, data?: Maybe<string>, words?: Maybe<Array<Maybe<{ __typename?: 'Word', _id?: Maybe<string>, word_en?: Maybe<string>, word_ua?: Maybe<string> }>>> }> };

export type TakeFewListQueryVariables = Exact<{
  takeFewListNumber?: Maybe<Scalars['Int']>;
}>;


export type TakeFewListQuery = { __typename?: 'Query', takeFewList?: Maybe<Array<Maybe<{ __typename?: 'List', _id?: Maybe<string>, listTitle?: Maybe<string>, words?: Maybe<Array<Maybe<string>>>, data?: Maybe<string> }>>> };

export type GetWordByIdQueryVariables = Exact<{
  getWordByIdId?: Maybe<Scalars['ID']>;
}>;


export type GetWordByIdQuery = { __typename?: 'Query', getWordById?: Maybe<{ __typename?: 'Word', _id?: Maybe<string>, word_en?: Maybe<string>, word_ua?: Maybe<string> }> };


export const CreateNewListMutationDocument = gql`
    mutation CreateNewListMutation($createNewListInput: ListInput) {
  createNewList(input: $createNewListInput) {
    _id
    listTitle
    words
    data
  }
}
    `;
export type CreateNewListMutationMutationFn = Apollo.MutationFunction<CreateNewListMutationMutation, CreateNewListMutationMutationVariables>;

/**
 * __useCreateNewListMutationMutation__
 *
 * To run a mutation, you first call `useCreateNewListMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNewListMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNewListMutationMutation, { data, loading, error }] = useCreateNewListMutationMutation({
 *   variables: {
 *      createNewListInput: // value for 'createNewListInput'
 *   },
 * });
 */
export function useCreateNewListMutationMutation(baseOptions?: Apollo.MutationHookOptions<CreateNewListMutationMutation, CreateNewListMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateNewListMutationMutation, CreateNewListMutationMutationVariables>(CreateNewListMutationDocument, options);
      }
export type CreateNewListMutationMutationHookResult = ReturnType<typeof useCreateNewListMutationMutation>;
export type CreateNewListMutationMutationResult = Apollo.MutationResult<CreateNewListMutationMutation>;
export type CreateNewListMutationMutationOptions = Apollo.BaseMutationOptions<CreateNewListMutationMutation, CreateNewListMutationMutationVariables>;
export const UpdateListMutationDocument = gql`
    mutation UpdateListMutation($updateListInput: ListUpdateInput) {
  updateList(input: $updateListInput) {
    _id
    listTitle
    words
  }
}
    `;
export type UpdateListMutationMutationFn = Apollo.MutationFunction<UpdateListMutationMutation, UpdateListMutationMutationVariables>;

/**
 * __useUpdateListMutationMutation__
 *
 * To run a mutation, you first call `useUpdateListMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateListMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateListMutationMutation, { data, loading, error }] = useUpdateListMutationMutation({
 *   variables: {
 *      updateListInput: // value for 'updateListInput'
 *   },
 * });
 */
export function useUpdateListMutationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateListMutationMutation, UpdateListMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateListMutationMutation, UpdateListMutationMutationVariables>(UpdateListMutationDocument, options);
      }
export type UpdateListMutationMutationHookResult = ReturnType<typeof useUpdateListMutationMutation>;
export type UpdateListMutationMutationResult = Apollo.MutationResult<UpdateListMutationMutation>;
export type UpdateListMutationMutationOptions = Apollo.BaseMutationOptions<UpdateListMutationMutation, UpdateListMutationMutationVariables>;
export const CreateNewWordMutationDocument = gql`
    mutation CreateNewWordMutation($createNewWordInput: WordInput) {
  createNewWord(input: $createNewWordInput) {
    _id
    word_en
    word_ua
  }
}
    `;
export type CreateNewWordMutationMutationFn = Apollo.MutationFunction<CreateNewWordMutationMutation, CreateNewWordMutationMutationVariables>;

/**
 * __useCreateNewWordMutationMutation__
 *
 * To run a mutation, you first call `useCreateNewWordMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNewWordMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNewWordMutationMutation, { data, loading, error }] = useCreateNewWordMutationMutation({
 *   variables: {
 *      createNewWordInput: // value for 'createNewWordInput'
 *   },
 * });
 */
export function useCreateNewWordMutationMutation(baseOptions?: Apollo.MutationHookOptions<CreateNewWordMutationMutation, CreateNewWordMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateNewWordMutationMutation, CreateNewWordMutationMutationVariables>(CreateNewWordMutationDocument, options);
      }
export type CreateNewWordMutationMutationHookResult = ReturnType<typeof useCreateNewWordMutationMutation>;
export type CreateNewWordMutationMutationResult = Apollo.MutationResult<CreateNewWordMutationMutation>;
export type CreateNewWordMutationMutationOptions = Apollo.BaseMutationOptions<CreateNewWordMutationMutation, CreateNewWordMutationMutationVariables>;
export const GetAllListDocument = gql`
    query getAllList {
  getAllList {
    listTitle
    words
    data
    _id
  }
}
    `;

/**
 * __useGetAllListQuery__
 *
 * To run a query within a React component, call `useGetAllListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllListQuery(baseOptions?: Apollo.QueryHookOptions<GetAllListQuery, GetAllListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllListQuery, GetAllListQueryVariables>(GetAllListDocument, options);
      }
export function useGetAllListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllListQuery, GetAllListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllListQuery, GetAllListQueryVariables>(GetAllListDocument, options);
        }
export type GetAllListQueryHookResult = ReturnType<typeof useGetAllListQuery>;
export type GetAllListLazyQueryHookResult = ReturnType<typeof useGetAllListLazyQuery>;
export type GetAllListQueryResult = Apollo.QueryResult<GetAllListQuery, GetAllListQueryVariables>;
export const GetListByIdDocument = gql`
    query getListById($getListByIdId: ID) {
  getListById(_id: $getListByIdId) {
    _id
    listTitle
    words {
      _id
      word_en
      word_ua
    }
    data
  }
}
    `;

/**
 * __useGetListByIdQuery__
 *
 * To run a query within a React component, call `useGetListByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetListByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetListByIdQuery({
 *   variables: {
 *      getListByIdId: // value for 'getListByIdId'
 *   },
 * });
 */
export function useGetListByIdQuery(baseOptions?: Apollo.QueryHookOptions<GetListByIdQuery, GetListByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetListByIdQuery, GetListByIdQueryVariables>(GetListByIdDocument, options);
      }
export function useGetListByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetListByIdQuery, GetListByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetListByIdQuery, GetListByIdQueryVariables>(GetListByIdDocument, options);
        }
export type GetListByIdQueryHookResult = ReturnType<typeof useGetListByIdQuery>;
export type GetListByIdLazyQueryHookResult = ReturnType<typeof useGetListByIdLazyQuery>;
export type GetListByIdQueryResult = Apollo.QueryResult<GetListByIdQuery, GetListByIdQueryVariables>;
export const TakeFewListDocument = gql`
    query takeFewList($takeFewListNumber: Int) {
  takeFewList(number: $takeFewListNumber) {
    _id
    listTitle
    words
    data
  }
}
    `;

/**
 * __useTakeFewListQuery__
 *
 * To run a query within a React component, call `useTakeFewListQuery` and pass it any options that fit your needs.
 * When your component renders, `useTakeFewListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTakeFewListQuery({
 *   variables: {
 *      takeFewListNumber: // value for 'takeFewListNumber'
 *   },
 * });
 */
export function useTakeFewListQuery(baseOptions?: Apollo.QueryHookOptions<TakeFewListQuery, TakeFewListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TakeFewListQuery, TakeFewListQueryVariables>(TakeFewListDocument, options);
      }
export function useTakeFewListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TakeFewListQuery, TakeFewListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TakeFewListQuery, TakeFewListQueryVariables>(TakeFewListDocument, options);
        }
export type TakeFewListQueryHookResult = ReturnType<typeof useTakeFewListQuery>;
export type TakeFewListLazyQueryHookResult = ReturnType<typeof useTakeFewListLazyQuery>;
export type TakeFewListQueryResult = Apollo.QueryResult<TakeFewListQuery, TakeFewListQueryVariables>;
export const GetWordByIdDocument = gql`
    query getWordById($getWordByIdId: ID) {
  getWordById(_id: $getWordByIdId) {
    _id
    word_en
    word_ua
  }
}
    `;

/**
 * __useGetWordByIdQuery__
 *
 * To run a query within a React component, call `useGetWordByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWordByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWordByIdQuery({
 *   variables: {
 *      getWordByIdId: // value for 'getWordByIdId'
 *   },
 * });
 */
export function useGetWordByIdQuery(baseOptions?: Apollo.QueryHookOptions<GetWordByIdQuery, GetWordByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWordByIdQuery, GetWordByIdQueryVariables>(GetWordByIdDocument, options);
      }
export function useGetWordByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWordByIdQuery, GetWordByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWordByIdQuery, GetWordByIdQueryVariables>(GetWordByIdDocument, options);
        }
export type GetWordByIdQueryHookResult = ReturnType<typeof useGetWordByIdQuery>;
export type GetWordByIdLazyQueryHookResult = ReturnType<typeof useGetWordByIdLazyQuery>;
export type GetWordByIdQueryResult = Apollo.QueryResult<GetWordByIdQuery, GetWordByIdQueryVariables>;