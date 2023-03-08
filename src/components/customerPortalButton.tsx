import {useMutation} from "react-query";
import {post} from "@/utils/fetchMiddleware";

export const customerPortal = () => {
    return post('payments/customer-portal/', {})
}

export default function CustomerPortalButton() {
    const mutation = useMutation(customerPortal)

    const handleClick = async (data: any) => {
        const response = await mutation.mutateAsync()
        const result = await response.json()
        if (result.redirect) {
            window.location = result.redirect;
        }
    }

    return <button className={`btn`} onClick={handleClick}>Manage Subscription</button>
}
