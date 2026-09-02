import { Pencil } from "@gravity-ui/icons";
import { Avatar, Button } from "@heroui/react";
import { BsTrash2 } from "react-icons/bs";


const CommentCard = ({ comment, onUpdate, onDelete }) => {
    return (
        <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">

            {/* Header */}
            <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                    <Avatar className="h-11 w-11">
                        <Avatar.Image
                            src={comment?.clientImage}
                            alt={comment?.clientName}
                        />
                        <Avatar.Fallback>
                            {comment?.clientName
                                ?.slice(0, 2)
                                .toUpperCase()}
                        </Avatar.Fallback>
                    </Avatar>

                    <div>
                        <h3 className="font-semibold text-slate-900">
                            {comment?.clientName}
                        </h3>

                        <p className="text-xs text-slate-500">
                            {new Date(
                                comment?.createdAt
                            ).toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                            })}
                        </p>
                    </div>
                </div>

                {/* Rating */}
                <div className="flex gap-0.5 text-sm text-amber-400">
                    {"★".repeat(comment?.rating || 5)}
                </div>
            </div>

            {/* Comment */}
            <div className="mt-6 flex-1">
                <p className="text-sm leading-6 text-slate-600">
                    {comment?.comment}
                </p>
            </div>

            {/* Actions */}
            <div className="mt-6 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4">
                <Button
                    size="sm"
                    variant="secondary"
                    // onPress={() => onUpdate(comment)}
                    className="border border-blue-200 bg-blue-50 font-medium text-blue-600 hover:bg-blue-100"
                >
                    <Pencil size={15} />
                    Update
                </Button>

                <Button
                    size="sm"
                    variant="secondary"
                    // onPress={() => onDelete(comment)}
                    className="border border-red-200 bg-red-50 font-medium text-red-600 hover:bg-red-100"
                >
                    <BsTrash2 size={15} />
                    Delete
                </Button>
            </div>
        </div>
    );
};

export default CommentCard;