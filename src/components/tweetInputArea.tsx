import {SingleTweetTextarea} from "@/components/singleTweetTextarea";

export function TweetInputArea(props: { onChange: (evt: any) => void, html: string }) {
    return <div className={`flex-grow flex justify-center items-center mt-16`}>
        <div>
            <SingleTweetTextarea onChange={props.onChange} html={props.html}/>
            <SingleTweetTextarea onChange={props.onChange} html={props.html}/>
            <SingleTweetTextarea onChange={props.onChange} html={props.html}/>
            <SingleTweetTextarea onChange={props.onChange} html={props.html}/>
            <SingleTweetTextarea onChange={props.onChange} html={props.html}/>
            <SingleTweetTextarea onChange={props.onChange} html={props.html}/>
        </div>
    </div>;
}
