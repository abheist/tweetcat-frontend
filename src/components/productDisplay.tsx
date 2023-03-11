import {useForm} from "react-hook-form";
import React from "react";
import {useMutation} from "react-query";
import {axiosPrivate} from "@/utils/axiosPrivate";

export const createCheckOutSession = (lookupKey: string) => {
    return axiosPrivate.post('payments/checkout-session/', {lookupKey: lookupKey})
}

export const ProductDisplay = () => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm()
    const mutation = useMutation(createCheckOutSession)

    const handleClick = async (lookupKey: string) => {
        const response = await mutation.mutateAsync(lookupKey)
        const data = response.data
        if (data.redirect) {
            window.location = data.redirect;
        }
    }

    return (
        <div className={`mt-4 flex gap-24`}>
            <section className={`p-4 bg-white w-72`}>
                <div className="card">
                    <div className="text-primary">
                        <h3>Monthly plan</h3>
                        <h5>$20.00 / month</h5>
                    </div>
                </div>

                <button className={`btn`} type="submit" onClick={() => handleClick('nap_app_monthly')}>
                    Checkout
                </button>
            </section>
            <section className={`p-4 bg-white w-72`}>
                <div className="card">
                    <div className="text-primary">
                        <h3>Yearly plan</h3>
                        <h5>200.00 / yearly</h5>
                    </div>
                </div>

                <button className={`btn`} type="button" onClick={() => handleClick('nap_app_yearly')}>
                    Checkout
                </button>
            </section>
        </div>
    )
};

