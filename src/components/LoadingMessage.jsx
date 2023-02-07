export const LoadingMessage = ({ isLoading }) => {
    const message = "Loading";
    return (
        <>
            {
                isLoading && (<h2>{message}...</h2>) 
            }
        </>
    )
}
