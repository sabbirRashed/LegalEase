import CommentCard from '@/components/dashboard/user/CommentCard';
import NoComments from '@/components/dashboard/user/NoCommentsCard';
import { getCommentsByClientId } from '@/lib/api/comments';
import { getUserSession } from '@/lib/core/session';
import React from 'react';

const CommentsPage = async () => {

    const user = await getUserSession()
    const comments = await getCommentsByClientId(user?.id);
    console.log(comments);
    return (
        <div className='w-11/12 max-w-7xl mx-auto px-6 py-8'>
            <div className='mb-10'>
                <h1 className="text-2xl font-bold text-slate-900">
                    My Comments
                </h1>

                <p className="mt-1 text-sm text-slate-500">
                    View, update or delete your comments.
                </p>
            </div>


            {
                comments.length > 0 ? <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 '>
                    {
                        comments.map(comment => {
                            return <CommentCard key={comment?._id} comment={comment} />
                        })
                    }
                </div>
                : 
                <NoComments/>
            }
        </div>
    );
};

export default CommentsPage;