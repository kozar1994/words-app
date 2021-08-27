import React from "react";
import { useHistory } from "react-router-dom";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

import { TextField, Button, Card, Box, FormHelperText, LinearProgress, Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
import { useCreateNewListMutationMutation } from "../generated/graphql";

interface IFormInputs {
  listTitle: string
}

const AddList: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const history = useHistory()

  const [createNewList, { loading }] = useCreateNewListMutationMutation();

  const { handleSubmit, control, reset, formState: { errors } } = useForm<IFormInputs>();
  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    const newList = await createNewList({
      variables: {
        createNewListInput: {
          listTitle: data.listTitle,
          words: [],
          data: `${Date.now()}`,
        }
      },
    })

    reset({
      listTitle: "",
    })

    history.push(`/list/${newList.data?.createNewList?._id}`)
  };

  return (
    <>
      <Card>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogTitle id="alert-dialog-title">{"Add new list with words"}</DialogTitle>
            <DialogContent>
              <Box p={2}>
                <Box pb={2}>
                  <Controller
                    name="listTitle"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <TextField placeholder={'Title list'} {...field} />}
                  />
                  {errors.listTitle && <FormHelperText id="component-error-text"><Box color={'red'}>This field is required</Box></FormHelperText>}
                </Box>
              </Box>
              {loading && <Box>
                <LinearProgress />
              </Box>}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Close
              </Button>
              <Button disabled={loading} type="submit" variant="contained" color="primary">
                Save
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </Card>
      <Button onClick={handleClickOpen} color="primary" autoFocus>
        Add list
      </Button>
    </>
  );
}

export default AddList;
