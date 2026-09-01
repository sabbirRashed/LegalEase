"use client"

import { postComment } from '@/lib/actions/comments';
import { Person } from '@gravity-ui/icons';
import { Avatar, Button, TextArea } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { FaRocketchat } from 'react-icons/fa';



const CommentsSection = ({ lawyer, comments, user }) => {
    const commentRef = useRef(null);
    const [comment, setComment] = useState('');
    const [isloading, setIsloading] = useState(false)
    const router = useRouter()


    const handleCommentClick = () => {
        commentRef.current?.focus();
    };

    const handleComment = async () => {

        setIsloading(true)
        const commentData = {
            clientUserId: user?.id,
            clientName: user?.name,
            clientEmail: user?.email,
            clientImage: user?.image || "",
            lawyerProfileId: lawyer?._id,
            lawyerName: lawyer?.name,
            lawyerEmail: lawyer?.email,
            comment: comment,

        }

        try {
            const res = await postComment(lawyer?._id, commentData);
            if (res?.insertedId) {
                toast.success(`Successfully post your comment.`);
                setComment("")
                router.refresh()

            }

            console.log('comment :', commentData);
        }
        catch (error) {
            toast.error('Something went wrong! Please try again.')
        }
        finally {
            setIsloading(false)
        }
    }


    return (
        <section className="mt-8 bg-white p-7 shadow-sm md:p-10">

            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                    <div className="flex items-center gap-3">
                        <div className="h-8 w-1 bg-sky-500" />

                        <h2 className="font-serif text-2xl uppercase text-slate-900">
                            Client Comments
                        </h2>
                    </div>

                    <p className="mt-2 text-sm text-slate-500">
                        See what previous clients say about this lawyer.
                    </p>
                </div>

                {/* For authenticated users later */}
                {
                    (comment.trim().length) > 0 ?
                        (<Button
                            onClick={handleComment}
                            isDisabled={isloading}
                            variant="outline"
                            className="rounded-xl border-slate-300 font-semibold text-slate-700 flex items-center gap-3"
                        >
                            {
                                isloading ? "Submiting..." : <>Send Comment <FaRocketchat /></>
                            }
                        </Button>)

                        :
                        (<Button
                            onClick={handleCommentClick}
                            variant="outline"
                            className="rounded-xl border-slate-300 font-semibold text-slate-700"
                        >
                            Write a Comment
                        </Button>)
                }
            </div>


            {/* input field */}
            <div className=" space-y-3">
                <TextArea
                    ref={commentRef}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    fullWidth
                    placeholder="Comments..."
                    className={'shadow-none border border-slate-200 mt-4'} />
            </div>

            {/* Comments */}
            <div className="mt-8 space-y-4">

                {comments.map((item) => (
                    <div
                        key={item.id}
                        className="rounded-2xl border border-slate-200 p-5"
                    >
                        <div className="flex items-start justify-between gap-4">

                            <div className="flex gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100">
                                    <Person className="h-5 w-5 text-sky-600" />
                                </div>

                                <div>
                                    <p className="font-semibold text-slate-800">
                                        {item.name}
                                    </p>

                                    <p className="text-xs text-slate-400">
                                        {item.date}
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-1 text-amber-400">
                                ★★★★★
                            </div>
                        </div>

                        <p className="mt-4 pl-0 text-sm leading-7 text-slate-600 md:pl-[52px]">
                            {item.comment}
                        </p>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default CommentsSection;