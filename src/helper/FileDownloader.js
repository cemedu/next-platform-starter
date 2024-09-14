import toast from "react-hot-toast";

const FileDownloader = async (urlsdf) => {
    const url = decodeURIComponent(urlsdf);
    fetch(url).then(res => res.blob())
        .then(blob => {
            const blobUrl = window.URL.createObjectURL(new Blob([blob]));
            const fileName = url.split('/').pop();
            const aTag = document.createElement("a");
            aTag.href = blobUrl;
            aTag.setAttribute('download', fileName);
            document.body.appendChild(aTag);;
            aTag.click();
            aTag.remove();
            toast.success('File is downloading now!');

        }).catch(err => {
            toast.error(err.message);
        });
}
export default FileDownloader;