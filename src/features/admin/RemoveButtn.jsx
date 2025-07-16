import { IconButton } from '@material-tailwind/react'
import React from 'react'
import { useRemoveProductMutation } from '../products/productApi'
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';

export default function RemoveButtn({id}) {
    const [removeProduct, {isLoading}] = useRemoveProductMutation();
    const { user } = useSelector((state) => state.userSlice);

    const handleRemove = async () => {
    try {
      await removeProduct({
        id,
        token: user?.token
      }).unwrap();
      toast.success('successfully removed');
    } catch (err) {
      toast.error(err.data?.message || err.data)
    }
  }
  return (
    <IconButton
    onClick={handleRemove}
      size='sm' color='pink'>
      <i className="fas fa-trash" />
    </IconButton>
  )
}
