import React, { useState } from 'react';

export default function FormationCodage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ nom: '', email: '', module: '' });
  const [showModal, setShowModal] = useState(false);

  // Gestion du formulaire d'inscription
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.nom && formData.email && formData.module) {
      setShowModal(true);
      setFormData({ nom: '', email: '', module: '' });
      setTimeout(() => setShowModal(false), 3000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (