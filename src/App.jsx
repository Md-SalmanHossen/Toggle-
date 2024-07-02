import React, { useState } from 'react';

export default function Toggle() {
    const [enabled, setEnabled] = useState(false);

    return (
        <div className="flex justify-center items-center bg-gray-100">
            <div
                className={`flex items-center h-8 w-16 cursor-pointer rounded-full border ${
                    enabled ? 'bg-teal-500' : 'bg-gray-300'
                }`}
                onClick={() => setEnabled(!enabled)}
            >
                <span
                    className={`inline-block h-6 w-6 bg-white rounded-full transition-transform ${
                        enabled ? 'translate-x-8' : 'translate-x-0'
                    }`}
                />
            </div>
            <span className="ml-3 text-gray-900 font-medium">{enabled ? 'ON' : 'OFF'}</span>
        </div>
    );
}
