// Simple integration test example
describe('API Integration Test', () => {
    test('async test example', async () => {
      const mockFetch = jest.fn(() => 
        Promise.resolve({
          json: () => Promise.resolve({ success: true }),
        })
      );
      global.fetch = mockFetch;
  
      const response = await fetch('https://api.example.com');
      const data = await response.json();
      
      expect(data.success).toBe(true);
      expect(mockFetch).toHaveBeenCalledTimes(1);
    });
  });