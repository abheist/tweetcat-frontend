import {useMutation} from "react-query";
import {axiosPrivate} from "@/utils/axiosPrivate";

export const customerPortal = () => {
    return axiosPrivate.post('payments/customer-portal/', {})
}

export default function CustomerPortalButton() {
    const mutation = useMutation(customerPortal)

    const handleClick = async () => {
        const response = await mutation.mutateAsync()
        const data = response.data
        if (data.redirect) {
            window.location = data.redirect;
        }
    }

    return <button onClick={handleClick}>Manage Subscription</button>
}
