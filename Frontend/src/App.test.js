import {  render, fireEvent, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { UseContext } from './Components/ProviderContext'
import App from './App';
import UrlTable from './Components/UrlTable';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Home page/i);
  expect(linkElement).toBeInTheDocument();
});
describe('Test App component', () => {
    test('renders App component', () => {
        render(<App />);
        expect(screen.getByText('View your Url')).toBeInTheDocument();
    });

    test('shortened URL is displayed after clicking button', async () => {
        render(<App />);
        const button = screen.getByText('Create New Shortened Url');
        fireEvent.click(button);
        const result = await screen.findByText(/Your shortened url is:/i);
        expect(result).toBeInTheDocument();
    });
    test('shortened URL is displayed after clicking button', async () => {
      render(<App />);
      const button = screen.getByText('View your Url');
      fireEvent.click(button);
      const result = await screen.findByText(/Show your Url/i);
      expect(result).toBeInTheDocument();
  });
});

describe('Test UrlTable component', () => {
    test('renders UrlTable component', () => {
        render(<UrlTable />);
        expect(screen.getByText(/Most Frequently/i)).toBeInTheDocument();
    });

    test('displays table headers', () => {
      
        render(<UrlTable />);
        expect(screen.getByText(/Original URL/i)).toBeInTheDocument();
        expect(screen.getByText(/Short URL/i)).toBeInTheDocument();
    });

    test('displays table data', () => {
        const urls = [
            { url: 'https://example.com', short: 'https://short.ly/12345', count:1 },
            { url: 'https://another-example.com', short: 'https://short.ly/67890' ,count:1},
        ];
        render(<UrlTable />, { wrapper: ({ children }) => <UseContext.Provider value={urls}>{children}</UseContext.Provider> });
        expect(screen.getByText('https://example.com')).toBeInTheDocument();
        expect(screen.getByText('https://short.ly/12345')).toBeInTheDocument();
        expect(screen.getByText('https://another-example.com')).toBeInTheDocument();
        expect(screen.getByText('https://short.ly/67890')).toBeInTheDocument();
    });
    test('renders UrlTable component', () => {
      const mockUrls = [
        { url: 'https://example.com', short: 'abc123', count: 5 },
        
      ];
    
      render(<UrlTable />, { wrapper: ({ children }) => <UseContext.Provider value={mockUrls}>{children}</UseContext.Provider> });
      expect(screen.getByText('https://example.com')).toBeInTheDocument();
      expect(screen.getByText('abc123')).toBeInTheDocument();
      expect(screen.getByText('5')).toBeInTheDocument();
    });
});