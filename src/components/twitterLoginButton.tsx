interface TwitterLoginButtonProps {
    onClick: () => void
    name: string
    wide?: boolean
}

export function TwitterLoginButton({onClick, name, wide}: TwitterLoginButtonProps) {
    return <button
        className={`btn btn-lg bg-blue-500 rounded-full font-extrabold text-white mt-24 
                                            border-blue-500 shadow-lg shadow-blue-500 hover:shadow-xl hover:shadow-blue-500
                                            bg-gradient-to-b from-blue-500 to-blue-700
                                            ${wide ? 'btn-wide' : ''}`}
        onClick={onClick}>
        {name}
    </button>;
}
