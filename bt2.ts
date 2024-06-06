function divideNumbers(a: number | string, b: number | string): string | number {
    try {  
      if (typeof a !== 'number' || typeof b !== 'number' ) {
        return 'Phải nhập vào hai số'
      }
  
      if (b === 0) {
        return 'Không thể chia cho 0'
      }
  
      return a / b;
    } catch (error) {
      return `lỗi`;
    } finally {
      console.log('Kết thúc hàm divideNumbers');
    }
  }
  
  console.log(divideNumbers(10, 2));  
  console.log(divideNumbers(10, 0)); 
  console.log(divideNumbers("abc", 2)); 
  console.log(divideNumbers("10", 2));  
  