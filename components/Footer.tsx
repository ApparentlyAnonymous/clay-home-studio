export default function Footer() {
  return (
    <footer className="bg-[#f6f4f2] py-12 text-center text-gray-600 text-sm mt-24">
      <p className="mb-2">© {new Date().getFullYear()} Clay Home Studio</p>
      <p>
        Handcrafted with care in Bangalore •{" "}
        <a
          href="mailto:clayhomestudio@gmail.com"
          className="underline hover:text-gray-800"
        >
          clayhomestudio@gmail.com
        </a>
      </p>
    </footer>
  )
}
