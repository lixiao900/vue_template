
    /**
     * 
     * @param { utc时间 } datetime 
     * @param { 年月日分隔符 } left 
     * @param { 时分秒分隔符 } right 
     */
    function formatWithSeperator (datetime, left="-",  right=":") {
        if (datetime != null) {
           const dateMat = new Date(datetime);
           const year = dateMat.getFullYear();
           const month = dateMat.getMonth() + 1;
           const day = dateMat.getDate();
           const hh = dateMat.getHours();
           const mm = dateMat.getMinutes();
           const ss = dateMat.getSeconds();
           const timeFormat = year + left + month + left + day + " " + hh + right + mm + right + ss;
           return timeFormat;
        }
    }

    export {
        formatWithSeperator
    };