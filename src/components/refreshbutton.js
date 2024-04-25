import React from 'react';
import RefreshIcon from '../svgs/refresh-icon.svg';

export default function RefreshButton({ onClick }) {
    const refreshPage = () => {
        window.location.reload();
      };
    return (
        <button onClick={refreshPage}><img src={RefreshIcon} alt="Refresh" /></button>
    );
}