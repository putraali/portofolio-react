import { Mail, Phone, Send, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="container min-vh-100 d-flex align-items-center pt-5 mt-5 pb-5">
      <div className="row w-100 g-5">
        <div className="col-md-6">
          <h1 className="display-5 fw-bold text-white mb-4">Let&apos;s Chat. <br /><span className="text-barbatos-red">Tell me about your project.</span></h1>
          <p className="lead text-secondary mb-5">
            Punya ide menarik? Mari diskusikan bersama. Saya siap membantu mewujudkan visi digital Anda.
          </p>

          <div className="d-flex flex-column gap-4">
            <div className="d-flex align-items-center gap-3 p-3 bg-barbatos-frame rounded border border-secondary">
              <div className="p-3 text-barbatos-red rounded border border-dark"><Mail /></div>
              <div>
                <p className="small text-secondary text-uppercase fw-bold mb-1">Mail Me</p>
                <p className="text-white fw-bold mb-0">putraaliperdana@gmail.com</p>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3 p-3 bg-barbatos-frame rounded border border-secondary">
              <div className="p-3 text-barbatos-red rounded border border-dark"><Phone /></div>
              <div>
                <p className="small text-secondary text-uppercase fw-bold mb-1">Call Me</p>
                <p className="text-white fw-bold mb-0">0899-3415-875</p>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3 p-3 bg-barbatos-frame rounded border border-secondary">
              <div className="p-3 text-barbatos-red rounded border border-dark"><MapPin /></div>
              <div>
                <p className="small text-secondary text-uppercase fw-bold mb-1">Location</p>
                <p className="text-white fw-bold mb-0">Kawali, Ciamis, Jawa Barat, Indonesia</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <form className="bg-barbatos-frame p-4 p-md-5 rounded border border-secondary shadow-lg d-flex flex-column gap-4">
            <div>
              <label className="text-secondary small fw-bold mb-2">Nama Lengkap</label>
              <input type="text" className="form-control bg-black text-white border-secondary py-3" placeholder="John Doe" />
            </div>
            <div>
              <label className="text-secondary small fw-bold mb-2">Email</label>
              <input type="email" className="form-control bg-black text-white border-secondary py-3" placeholder="john@example.com" />
            </div>
            <div>
              <label className="text-secondary small fw-bold mb-2">Pesan</label>
              <textarea rows="4" className="form-control bg-black text-white border-secondary py-3" placeholder="Ceritakan tentang project Anda..."></textarea>
            </div>
            <button className="btn btn-accent-barbatos py-3 fw-bold d-flex align-items-center justify-content-center gap-2 mt-2 w-100">
              <Send size={18} /> Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;