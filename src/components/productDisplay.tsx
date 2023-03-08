import {useForm} from "react-hook-form";
import React from "react";
import {post} from "@/utils/fetchMiddleware";
import {useMutation} from "react-query";

export const createCheckOutSession = (lookupKey: string) => {
    return post('payments/create-checkout-session/', {lookupKey: lookupKey})
}

export const ProductDisplay = () => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm()
    const mutation = useMutation(createCheckOutSession)

    const onSubmit = async (data: any) => {
        console.log(data)
        const response = await mutation.mutateAsync(data.lookupKey)
        const result = await response.json()
        if (result.redirect) {
            window.location = result.redirect;
        }
    }

    return (
        <section className={`p-4 bg-white w-72`}>
            <div className="card">
                <div className="">
                    <h3>Starter plan</h3>
                    <h5>$20.00 / month</h5>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className={`mt-4`}>
                {/* Add a hidden field with the lookup_key of your Price */}
                <input defaultValue="nap_app" {...register("lookupKey")} type="hidden"/>

                <button className={`btn`} type="submit">
                    Checkout
                </button>
            </form>
        </section>)
};
