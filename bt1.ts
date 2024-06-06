function calculateBMI(weight: number | string, height: number | string): string | number {
    try {
      if (typeof weight !== 'number' || weight <= 0) {
        return 'Cân nặng không hợp lệ'
      }
      if (typeof height !== 'number' || height <= 0) {
        return 'Chiều cao không hợp lệ'
      }
      
      const bmi = weight / (height * height);
      return parseFloat(bmi.toFixed(2));
    } catch (error) {
      return 'chỉ số không hợp lệ';
    }
  }
  
  console.log(calculateBMI(70, 1.75));  
  console.log(calculateBMI("70", 1.75)); 
  console.log(calculateBMI(70, -1.75)); 
  