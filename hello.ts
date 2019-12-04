export default function hello(name: string, callback: (words: string) => void) {
  setTimeout(() => {
    callback(`Hello, ${name}!`);
  }, 2000);
};
