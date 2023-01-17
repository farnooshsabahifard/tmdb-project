export default function renTitle(item) {
    if(item.hasOwnProperty("original_title")) {
        return item.original_title;
    } else return item.original_name
}