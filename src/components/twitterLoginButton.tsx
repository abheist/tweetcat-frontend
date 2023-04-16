interface TwitterLoginButtonProps {
    onClick: () => void
    name: string
    wide?: boolean
    className?: string
}

export function TwitterLoginButton({onClick, name, wide, className}: TwitterLoginButtonProps) {
    return <div>
        <button
            className={`btn btn-lg bg-blue-500 rounded-full font-extrabold text-white
                        border-blue-500 shadow-lg shadow-blue-500 hover:shadow-xl hover:shadow-blue-500
                        bg-gradient-to-b from-blue-500 to-blue-700
                        ${wide ? 'btn-wide' : ''}
                        ${className}
                        `
            }
            onClick={onClick}>
            {name}
        </button>
        <p className={`text-center text-xs`}>Login with Twitter</p>
    </div>;
}
