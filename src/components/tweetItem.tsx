interface TweetItemProps {
    active?: boolean,
    text: string
    onClick?: () => void
}

export function TweetItem({active, text, onClick}: TweetItemProps) {

    const activeClass = active ? `bg-white border-l-4 border-l-primary` : ``;

    let MAX_LENGTH = 117;
    return <li className={`px-6 py-4 group relative cursor-pointer ` + activeClass} onClick={onClick}>
        <div
            className={`absolute py-2 px-4 right-0 flex gap-x-2 bg-gradient-to-l ${active ? `from-white to-white/80` : `from-base-200 to-base-200/80`} 
                                transition-opacity duration-500 ease-in-out
                                opacity-0  group-hover:opacity-100`}>
            <button className="btn btn-xs btn-square btn-outline">
                E
            </button>
        </div>
        <div>
            <p>{text.substring(0, MAX_LENGTH)}{text.length > MAX_LENGTH && '...'}</p>
        </div>
    </li>;
}
