function cone(radius, height){
    let volume = (1/3) * Math.PI * Math.pow(radius, 2) * height;

    let baseArea = Math.PI * Math.pow(radius,2);

    let area = Math.PI * radius * Math.sqrt(Math.pow(radius,2) + Math.pow(height,2)) + baseArea;
    
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);

}
cone(3, 5);