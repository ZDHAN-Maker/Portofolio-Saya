import DataImage from "./data";
import { listTools,listProyek } from "./data";

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 gap-6 grid-cols-1 w-full px-10">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="hero image"  className="w-10 rounded-md" loading="lazy" />
            <a className="text-2xl"> "Error is not the end, but the beginning of learning."  😊</a>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, Nama Saya M. Zidhan Apriansyah</h1>
          <p className="text-base/loose mb-6 opacity-50">Saya adalah seorang mahasiswa teknik informatika di universitas dinamika bangsa jambi. saya memiliki ketertarikan pada pengembangan teknologi dan pengembangan inovasi, saya suka mempelajari hal-hal baru dengan semangat yang tinggi dengan fokus pada analis data, pemrograman, dan pengembangan aplikasi di mana saya dapat memanfaatkan pengetahuan saya di bidang lain. saya terus mencari peluang belajar dan membuka wawasan saya untuk mendapatkan koneksi baru di industri teknologi.</p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="/CV%20M.%20Zidhan%20Apriansyah.pdf" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">
              Downlaod CV <i className="ri-download-line ri-lg"></i>
            </a>
             <a href="#proyek" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">
              Lihat Proyek
            </a>
          </div>
        </div>
          <img src={DataImage.HeroImage} alt="profil image" className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-4s" loading="lazy"/> 
      </div> 

      {/* Tentang*/}
      <div className="tentang mt-32 py-10" id="tentang"> 
        <div className="w-full p-10 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <img src={DataImage.HeroImage} alt="Image"  className="w-12 rounded-md mb-10 sm:hidden" loading="lazy" />
          <p className="text-xl/loose mb-10">
            Saya senang mengeksplorasi ide-ide baru dan terus mencari peluang untuk berkembang, terutama di bidang-bidang seperti analisis data, pemrograman, dan pengembangan aplikasi. Saya percaya bahwa mempelajari teknologi bukan hanya sekadar keterampilan, tetapi juga cara untuk membentuk masa depan. Saya didorong oleh rasa ingin tahu, dipandu oleh tujuan, dan selalu ingin terhubung dengan orang lain di industri teknologi yang memiliki visi yang sama untuk menciptakan dampak yang berarti melalui inovasi digital.
          </p>
          <div className="flex items-center justify-between">
            <img src={DataImage.HeroImage} alt="image" className="w-12 rounded-md sm:blok hidden" loading="lazy" />
            <div className="flex items-center gap-6">
              <div className="div">
                <h1 className="text-4xl mb-1">6 <span className="text-violet-500">+</span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
              <div className="div">
                <h1 className="text-4xl mb-1">2 <span  className="text-violet-500">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>
        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Tools yang di pakai</h1>
          <p className="w-full max-w-4xl text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Berikut ini beberapa tools yang biasa saya pakai </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map(tool  => (
              <div className=" flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true">
              <img src={tool.gambar} alt="tools image" className=" w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"/>
              <div>
              <h4 className="font-bold">{tool.nama}</h4>
              <p className="opacity-50">{tool.ket}</p>
            </div>
          </div>
            ))}
          </div>
        </div>
      </div>

      {/* Proyek */}
      <div className="proyek mt-32 py-10" id="proyek">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Proyek</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Berikut ini beberapa proyek yang telah saya buat</p>
            <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

            {listProyek.map(proyek =>(
              <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md" data-aos="fade-up" data-aos-duration="1000">
                <img src={proyek.gambar} alt="proyek img" loading="lazy" />
                <div>
                  <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                  <p className="text-base/loose nb-4">{proyek.desk}</p>
                  <div className="flex flex-wrap gap-2">
                    {proyek.tools.map((tool,index) =>(
                    <p className="py-1 p-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={index}>{tool}</p>
                ))}
                  </div>
                  <div className="mt-8 text-center ">
                     <a
          href={proyek.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600"
        >
          Lihat WebSite
        </a>  
                  </div>
                </div>
              </div>
            ))}
            </div>
      </div>
      {/* Kontak Saya*/}
      <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Kontak</h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Mutualan dengan saya</p>
            <form action="https://formsubmit.co/zidanapriansyah23@gmail.com" method="POST" className="bg-zinc-800 p-10 w-full max-w-3xl mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold"> Nama Lengkap</label>
                  <input type="text" name="nama" placeholder="Masukkan Nama" className="border border-zinc-500 p-2 rounded-md" required ></input>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold" >Email</label>
                  <input type="text" name="email" placeholder="Masukkan Email" className="border border-zinc-500 p-2 rounded-md" required></input>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="pesan">Pesan</label>
                  <textarea name="pesan" id="pesan" cols="45" rows="7" className="border border-zinc-500 p-2 rounded-md" placeholder="Pesan" required></textarea>
                </div>
              </div>
              <div className="text-center">
                  <button type="submit" className="bg-violet-700 p-3 rounded-lg w-full cursor-ponter border border-zinc-600 hover:bg-violet-600 mt-5">Kirim Pesan</button>
                </div>
            </form>
      </div>
    </>
  )
}

export default App
