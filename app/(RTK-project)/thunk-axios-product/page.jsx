'use client'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {GetProduct} from '../../slice/product-thunk/productSlice'
import Spinner from '../../../components/common/Spinner'
import Error from '../../../components/common/Error'
import FetchProduct from './FetchProduct'

const Page = () => {
    const dispatch = useDispatch()
    const {isLoading, data, error} = useSelector((store) => store.product)
    console.log(data)

    useEffect(() => {
        dispatch(GetProduct())
    },[dispatch])

    if(isLoading){
        return <Spinner />
    }
    if(error){
        return <Error error={error} />
    }
  return (
    <div>
        <div className="text-2xl font-bold mb-4 text-center p-6">Products</div>
        <FetchProduct data={data} />
        
    </div>
  )
}

export default Page