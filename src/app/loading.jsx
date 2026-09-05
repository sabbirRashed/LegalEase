import { CircularProgress } from "react-loader-spinner";

export default function Loading() {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <CircularProgress
                height="100"
                width="100"
                color="#2563eb"
                ariaLabel="circular-progress-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                strokeWidth={2}
                animationDuration={1}
            />
        </div>
    );
}