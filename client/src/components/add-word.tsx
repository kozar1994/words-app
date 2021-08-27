import React from "react";
import { useParams } from "react-router-dom";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

import { TextField, Button, Grid, Card, Box, FormHelperText, LinearProgress } from "@material-ui/core";

import { useCreateNewWordMutationMutation, useUpdateListMutationMutation } from "../generated/graphql";

interface IFormInputs {
  word_en: string
  word_ua: string
}

type AddWordsProps = {
  oldList: any,
  resend: any,
}

const AddWords: React.FC<AddWordsProps> = ({ oldList, resend }) => {
  const { id } = useParams<{ id: string }>();
  const [createNewWord, { loading: wordLoading }] = useCreateNewWordMutationMutation();
  const [updateList, { loading: updateListLoading }] = useUpdateListMutationMutation();

  const { handleSubmit, control, reset, formState: { errors } } = useForm<IFormInputs>();
  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    const addWord = await createNewWord({
      variables: {
        createNewWordInput: data
      },
    })

    const filterWord = oldList.words.map((it: any) => it._id);

    await updateList({
      variables: {
        updateListInput: {
          _id: id,
          listTitle: oldList.listTitle,
          words: [...filterWord, addWord.data?.createNewWord?._id],
        }
      }
    })

    resend()
    reset({
      word_en: "",
      word_ua: ""
    })
  };


  return (
    <Card>
      <Box p={2}>
        <Box component={'h3'}>Add new words form</Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Controller
                name="word_en"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <TextField placeholder={'words en'} {...field} />}
              />
              {errors.word_en && <FormHelperText id="component-error-text"><Box color={'red'}>This field is required</Box></FormHelperText>}
            </Grid>
            <Grid item xs={4}>
              <Controller
                name="word_ua"
                control={control}
                render={({ field }) => <TextField placeholder={'words ua'} {...field} />}
              />
            </Grid>
            <Grid item xs={4}>
              <Button disabled={wordLoading || updateListLoading} type="submit" variant="contained" color="primary">
                Add new word
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
      {wordLoading || updateListLoading && <Box>
        <LinearProgress />
      </Box>}
    </Card>
  );
}

export default AddWords;
