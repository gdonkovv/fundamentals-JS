function extractFile(filePath) {

    let index = filePath.lastIndexOf("\\");
    let fileNameWithExtention = filePath.slice(index + 1);
    
    let dotIndex = fileNameWithExtention.lastIndexOf(".");
    let fileName = fileNameWithExtention.slice(0, dotIndex);
    let fileExtention = fileNameWithExtention.slice(dotIndex+1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtention}`);

}
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');