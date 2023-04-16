import {useForm} from "react-hook-form";
import {axiosPrivate} from "@/utils/axiosPrivate";
import {useMutation} from "react-query";
import {useRouter} from "next/router";

const updateEmail = async (data: any) => {
    return await axiosPrivate.post('/user/email/', data)
}

const Email = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const mutation = useMutation(updateEmail)

    const router = useRouter()

    const onSubmit = async (data: any) => {
        const response = await mutation.mutateAsync(data)
        if (response.status === 200) {
            await router.push('/tweets')
        }
    }

    return (
        <div className={`h-screen w-full flex justify-center items-center`}>
            <form className={`space-y-2 w-96 mx-w-xs mx-auto`}
                  onSubmit={handleSubmit(onSubmit)}>
                <p className={``}>Enter your email:</p>
                <div>
                    <input type="email"
                           placeholder="john@doe.com"
                           {...register("email", {required: "Email is required"})}
                           className="input input-bordered input-primary w-full"/>
                    <label className="label">
                        {/*@ts-ignore*/}
                        {errors.email && <span className="label-text-alt text-error">{errors?.email?.message}</span>}
                    </label>
                </div>
                <button type="submit" className={`btn btn-primary w-full`}>Save Email</button>
            </form>
        </div>
    )
}

export default Email
