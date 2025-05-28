import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';

function App() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="p-6 text-white bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center flex-col gap-4">
            <h1 className="text-4xl font-bold">Tailwind is working 🎉</h1>

            <button
                onClick={() => setIsOpen(true)}
                className="bg-accent text-black px-4 py-2 rounded hover:bg-opacity-80 transition"
            >
                Open Modal
            </button>

            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Dialog.Panel className="w-full max-w-md rounded bg-white p-6 text-black shadow-xl">
                        <div className="flex justify-between items-center mb-4">
                            <Dialog.Title className="text-lg font-bold">This is a Modal</Dialog.Title>
                            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-black">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <p>Modal content goes here. You can customize this however you want.</p>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </div>
    );
}

export default App;
