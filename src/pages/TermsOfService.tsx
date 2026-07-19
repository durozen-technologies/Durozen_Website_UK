import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

export default function TermsOfService() {
    const navigate = useNavigate();
    return (
        <div className="w-full max-w-4xl mx-auto px-6 pt-4 lg:pt-6 pb-24">
            <SEO
                title="Terms of Service | Durozen"
                description="Terms and conditions for using the Durozen website and our services."
                path="/terms"
            />
            <button onClick={() => navigate('/')} className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-10 flex items-center gap-2 hover:text-secondary transition-colors">
                ← Back to Home
            </button>

            <div className="mb-10 border-b border-outline pb-8">
                <span className="inline-block px-3 py-1 bg-surface-dim border border-outline text-[10px] font-bold tracking-widest uppercase text-text-muted rounded-sm mb-4">Legal</span>
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-3">Terms of Service</h1>
                <p className="text-sm text-text-muted">Last Updated: June 2026</p>
            </div>

            <div className="space-y-10 text-text-muted leading-relaxed">
                <p className="text-base text-text-main">
                    By using this website, you agree to the following terms:
                </p>

                <section>
                    <h2 className="font-serif text-2xl font-bold text-primary mb-4">Website Use</h2>
                    <p className="text-sm">The content provided on this website is for general information purposes only. We reserve the right to modify, update, or remove content at any time without notice.</p>
                </section>

                <section>
                    <h2 className="font-serif text-2xl font-bold text-primary mb-4">Accuracy of Information</h2>
                    <p className="text-sm">While we strive to keep information accurate and up to date, Durozen makes no warranties regarding completeness or accuracy.</p>
                </section>

                <section>
                    <h2 className="font-serif text-2xl font-bold text-primary mb-4">Intellectual Property</h2>
                    <p className="text-sm">All website content, including text, images, logos, and graphics, is the property of Durozen unless otherwise stated.</p>
                </section>

                <section>
                    <h2 className="font-serif text-2xl font-bold text-primary mb-4">Limitation of Liability</h2>
                    <p className="text-sm">Durozen shall not be liable for any direct or indirect damages arising from the use of this website.</p>
                </section>

                <section className="bg-surface border border-outline rounded-lg p-6">
                    <h2 className="font-serif text-2xl font-bold text-primary mb-4">Contact</h2>
                    <p className="text-sm font-semibold text-text-main mb-2">Durozen</p>
                    <a href="mailto:info@durozen.in" className="text-secondary text-sm hover:underline">info@durozen.in</a>
                </section>
            </div>
        </div>
    );
}
