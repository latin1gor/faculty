import './styles/App.css'

function App() {
  return <div>

    <img src="../img/img-1.png" className='h-96' alt="" style={{}} />

    <div class="relative group">
  <img src="../img/img-1.png" alt="Image" class="w-full h-auto group-hover:opacity-50 transition-opacity duration-300"/>
  <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300">
    <div class="text-white absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <p class="text-2xl font-semibold">Hover Text</p>
    </div>
  </div>
</div>

  </div>
}
export default App
