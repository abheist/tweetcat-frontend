import {useForm} from "react-hook-form";
import {axiosPrivate} from "@/utils/axiosPrivate";
import {useMutation} from "react-query";

const updateEmail = async (data: any) => {
    return await axiosPrivate.post('/user/email', data)
}

const Email = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const mutation = useMutation(updateEmail)

    const onSubmit = (data: any) => {
        console.log(data)
        // check if email is valid
        // check if email is already in use
        // if not, update email
        const email = data.email
        if (email) {
            // check if email is valid
            if (email.includes('@') && email.includes('.')) {
                // check if email is already in use
                // if not, update email
            }
        }

        mutation.mutate(data)
    }

    return (
        <div className={`h-screen w-full flex justify-center items-center`}>
            <form className={`space-y-2 w-96 mx-w-xs mx-auto`}
                  onSubmit={handleSubmit(onSubmit)}>
                <p className={``}>Enter your email:</p>
                <input type="text"
                       placeholder="john@doe.com"
                       {...register("email", {required: true})}
                       className="input input-bordered input-primary w-full"/>
                <button type="submit" className={`btn btn-primary w-full`}>Save Email</button>
            </form>
        </div>
    )
}

export default Email
