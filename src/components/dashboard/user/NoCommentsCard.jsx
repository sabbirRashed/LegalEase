import Link from "next/link";
import { Button } from "@heroui/react";
import { BiMessageSquare } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";


const NoComments = () => {
    return (
        <div className="flex min-h-125 items-center justify-center rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex max-w-md flex-col items-center text-center">

                {/* Icon */}
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
                    <BiMessageSquare
                        size={38}
                        strokeWidth={1.8}
                        className="text-blue-500"
                    />
                </div>

                {/* Heading */}
                <h2 className="mt-6 text-2xl font-bold text-slate-900">
                    No Comments Yet
                </h2>

                {/* Description */}
                <p className="mt-2 text-sm leading-6 text-slate-500">
                    You haven't added any comments yet.
                    <br />
                    Share your experience and help others.
                </p>

                {/* Button */}
                <Link href="/lawyers">
                    <Button                        
                        variant="primary"
                        className="mt-6 rounded-md bg-blue-600 px-5 font-medium text-white hover:bg-blue-700"
                    >
                        <BiMessageSquare size={17} />
                        Add a Comment
                    </Button>
                </Link>

                {/* Browse Lawyers */}
                <Link
                    href="/lawyers"
                    className="mt-5 flex items-center gap-2 text-sm font-medium text-blue-600 transition hover:text-blue-700"
                >
                    Browse Lawyers
                    <BsArrowRight size={16} />
                </Link>
            </div>
        </div>
    );
};

export default NoComments;