import {SingleTweetTextarea} from "@/components/singleTweetTextarea";
import {useState} from "react";
import sanitizeHtml from "sanitize-html";
import {closestCenter, DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors} from "@dnd-kit/core";
import {arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy} from "@dnd-kit/sortable";
import {restrictToVerticalAxis} from "@dnd-kit/modifiers";

interface tweetsProps {
    content: string,
    id: number
}

export function TweetInputArea() {
    const [tweets, setTweets] = useState<tweetsProps[]>(() => [{content: "", id: Math.random()}]);
    const sanitizeConf = {};
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const addTweet = (index: number) => {
        const newContent = sanitizeHtml("", sanitizeConf)
        const newState = [...tweets]
        newState.splice(index + 1, 0, {content: newContent, id: Math.random()})
        setTweets(newState)
    }

    const removeTweet = (index: number) => {
        // TODO: add a snackbar for showing the user that this can't be deleted as this is the last tweet
        if (tweets.length === 1) return
        const newState = [...tweets]
        newState.splice(index, 1)
        setTweets(newState)
    }

    const handleDragEnd = (event: any) => {
        const {active, over} = event;

        if (active.id !== over.id) {
            setTweets((tweets) => {
                const oldIndex = tweets.findIndex((tweet) => tweet.id === active.id);
                const newIndex = tweets.findIndex((tweet) => tweet.id === over.id);

                return arrayMove(tweets, oldIndex, newIndex);
            });
        }
    }

    return <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        modifiers={[restrictToVerticalAxis]}
    >
        <div className={`flex-grow flex justify-center items-center mt-16 pb-56`}>
            <div className={`space-y-4`}>
                <SortableContext
                    items={tweets.map((tweet) => tweet.id)}
                    strategy={verticalListSortingStrategy}
                >
                    {tweets.map((tweet, index) => {
                        return <SingleTweetTextarea key={tweet.id}
                                                    id={tweet.id}
                                                    addTweet={addTweet}
                                                    removeTweet={removeTweet}
                                                    content={tweet.content}
                                                    index={index}/>
                    })}
                </SortableContext>
            </div>
        </div>
    </DndContext>;
}
