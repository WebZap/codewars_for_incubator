function testGetSum() {
    // Basic tests
    // Testing for fixed tests
    if (getSum(2, 2) !== 4) {
      console.error('Test case 1 failed');
    }
    if (getSum(3, 2) !== 5) {
      console.error('Test case 2 failed');
    }
    if (getSum(0, 0) !== 0) {
      console.error('Test case 3 failed');
    }
  }
  