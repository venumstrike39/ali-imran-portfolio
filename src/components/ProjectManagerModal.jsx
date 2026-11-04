import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Plus, 
  Trash2, 
  Edit3, 
  Save, 
  Upload, 
  RotateCcw, 
  Sparkles, 
  Check, 
  Film, 
  Video, 
  Image as ImageIcon,
  Copy,
  Download
} from 'lucide-react';
import { categories } from '../data/portfolioData';

export default function ProjectManagerModal({ 
  isOpen, 
  onClose, 
  projectsList, 
  onSaveProjects, 
  onResetProjects 
}) {
  const [editingId, setEditingId] = useState(null);
  const [activeTab, setActiveTab] = useState('list'); // 'list' or 'form'
  const [copiedJson, setCopiedJson] = useState(false);

  const initialFormState = {
    code: `PROJECT 0${projectsList.length + 1}`,
    title: '',
    subtitle: '',
    category: categories[1] || 'AI ANIMATED STORIES',
    tags: 'AI Video, Cinematic, 4K',
    description: '',
    duration: '01:30',
    resolution: '4K UHD 60FPS',
    ratio: '16:9',
    thumbnail: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    client: 'Client / Creator',
    role: 'AI Video Creator & Editor',
  };

  const [formData, setFormData] = useState(initialFormState);

  // Switch to edit mode for a project
  const handleStartEdit = (proj) => {
    setEditingId(proj.id);
    setFormData({
      code: proj.code || 'PROJECT',
      title: proj.title || '',
      subtitle: proj.subtitle || '',
      category: proj.category || categories[1],
      tags: Array.isArray(proj.tags) ? proj.tags.join(', ') : proj.tags || '',
      description: proj.description || '',
      duration: proj.duration || '01:30',
      resolution: proj.resolution || '4K 60FPS',
      ratio: proj.ratio || '16:9',
      thumbnail: proj.thumbnail || '',
      videoUrl: proj.videoUrl || '',
      client: proj.client || '',
      role: proj.role || '',
    });
    setActiveTab('form');
  };

  const handleStartAdd = () => {
    setEditingId(null);
    setFormData({
      ...initialFormState,
      code: `PROJECT 0${projectsList.length + 1}`,
    });
    setActiveTab('form');
  };

  const handleThumbnailUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setFormData(prev => ({ ...prev, thumbnail: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleVideoUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const localUrl = URL.createObjectURL(file);
    setFormData(prev => ({ ...prev, videoUrl: localUrl }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title) return;

    const parsedTags = formData.tags
      .split(',')
      .map(t => t.trim())
      .filter(Boolean);

    if (editingId) {
      // Update existing
      const updated = projectsList.map(p => {
        if (p.id === editingId) {
          return {
            ...p,
            ...formData,
            tags: parsedTags,
          };
        }
        return p;
      });
      onSaveProjects(updated);
    } else {
      // Add new
      const newProject = {
        ...formData,
        id: `proj-${Date.now()}`,
        tags: parsedTags,
      };
      onSaveProjects([newProject, ...projectsList]);
    }

    setActiveTab('list');
    setEditingId(null);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to remove this project?")) {
      const filtered = projectsList.filter(p => p.id !== id);
      onSaveProjects(filtered);
    }
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(projectsList, null, 2));
    setCopiedJson(true);
    setTimeout(() => setCopiedJson(false), 2500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#071109]/95 backdrop-blur-2xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl rounded-3xl bg-[#0A140B] border border-[#A8F542]/40 shadow-[0_25px_80px_rgba(0,0,0,0.95),0_0_60px_rgba(168,245,66,0.2)] overflow-hidden z-10 flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="px-6 py-4 border-b border-[#182C1B] flex items-center justify-between bg-[#071109]/90">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#A8F542] animate-pulse" />
              <h3 className="font-syne text-lg font-bold text-[#F5F5EF]">
                PROJECT STUDIO & MANAGER
              </h3>
              <span className="hidden sm:inline px-2 py-0.5 rounded bg-[#142817] text-[#A8F542] text-[10px] font-mono-code">
                LIVE EDIT & UPLOAD
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-[#142316] text-[#CBD7C8] hover:text-[#A8F542] hover:bg-[#1D361F] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Bar inside modal */}
          <div className="px-6 py-3 bg-[#0D180F] border-b border-[#182C1B] flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('list')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono-code transition-all cursor-pointer ${
                  activeTab === 'list'
                    ? 'bg-[#A8F542] text-[#071109] font-bold'
                    : 'bg-[#122314] text-[#A7B3A1] hover:text-[#F5F5EF]'
                }`}
              >
                ALL PROJECTS ({projectsList.length})
              </button>
              <button
                onClick={handleStartAdd}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono-code transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'form' && !editingId
                    ? 'bg-[#A8F542] text-[#071109] font-bold'
                    : 'bg-[#142817] text-[#A8F542] hover:bg-[#1A381E]'
                }`}
              >
                <Plus className="w-3.5 h-3.5" />
                ADD NEW PROJECT
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyJson}
                className="px-2.5 py-1.5 rounded-lg bg-[#101A11] border border-[#1E3B21] hover:border-[#A8F542] text-[11px] font-mono-code text-[#CBD7C8] flex items-center gap-1.5 cursor-pointer"
                title="Copy projects JSON to paste into portfolioData.js"
              >
                {copiedJson ? <Check className="w-3.5 h-3.5 text-[#A8F542]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedJson ? 'COPIED JSON' : 'EXPORT JSON'}</span>
              </button>

              <button
                onClick={() => {
                  if (window.confirm("Reset all projects to original defaults?")) {
                    onResetProjects();
                  }
                }}
                className="p-1.5 rounded-lg bg-[#142216] text-[#A7B3A1] hover:text-red-400 text-xs font-mono-code cursor-pointer"
                title="Reset to default showcase projects"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 overflow-y-auto flex-grow">
            {activeTab === 'list' ? (
              <div className="space-y-3">
                {projectsList.map((proj) => (
                  <div
                    key={proj.id}
                    className="p-4 rounded-2xl bg-[#0D180F] border border-[#19301D] hover:border-[#A8F542]/40 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3.5">
                      <img
                        src={proj.thumbnail}
                        alt={proj.title}
                        className="w-16 h-12 object-cover rounded-xl bg-[#122214] flex-shrink-0 border border-white/10"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono-code text-[#A8F542] font-semibold">
                            {proj.code}
                          </span>
                          <span className="text-[10px] font-mono-code text-[#A7B3A1]">
                            • {proj.category}
                          </span>
                        </div>
                        <h4 className="font-syne font-bold text-[#F5F5EF] text-sm sm:text-base">
                          {proj.title}
                        </h4>
                        <div className="text-xs text-[#A7B3A1] truncate max-w-sm sm:max-w-md">
                          {proj.subtitle}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-center">
                      <button
                        onClick={() => handleStartEdit(proj)}
                        className="px-3 py-1.5 rounded-lg bg-[#142817] text-[#A8F542] border border-[#A8F542]/30 hover:bg-[#1A381E] text-xs font-mono-code flex items-center gap-1 cursor-pointer"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>EDIT</span>
                      </button>
                      <button
                        onClick={() => handleDelete(proj.id)}
                        className="p-2 rounded-lg bg-[#1B1416] text-red-400 border border-red-500/20 hover:bg-red-950/40 text-xs cursor-pointer"
                        title="Delete Project"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Add / Edit Form */
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-[#182C1B]">
                  <h4 className="font-syne font-bold text-[#F5F5EF]">
                    {editingId ? `Editing: ${formData.title}` : 'Add New Portfolio Project'}
                  </h4>
                  <button
                    type="button"
                    onClick={() => setActiveTab('list')}
                    className="text-xs font-mono-code text-[#A7B3A1] hover:text-[#F5F5EF]"
                  >
                    ← Back to Projects List
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono-code text-[#CBD7C8] mb-1 uppercase">
                      PROJECT CODE / LABEL
                    </label>
                    <input
                      type="text"
                      value={formData.code}
                      onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#101A11] border border-[#1F3A22] text-[#F5F5EF] text-sm focus:outline-none focus:border-[#A8F542]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-code text-[#CBD7C8] mb-1 uppercase">
                      CATEGORY
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#101A11] border border-[#1F3A22] text-[#F5F5EF] text-sm focus:outline-none focus:border-[#A8F542] cursor-pointer"
                    >
                      {categories.filter(c => c !== 'ALL').map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono-code text-[#CBD7C8] mb-1 uppercase">
                      PROJECT TITLE *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="e.g. Cyberpunk Car Commercial"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#101A11] border border-[#1F3A22] text-[#F5F5EF] text-sm focus:outline-none focus:border-[#A8F542]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-code text-[#CBD7C8] mb-1 uppercase">
                      SHORT SUBTITLE / HOOK
                    </label>
                    <input
                      type="text"
                      value={formData.subtitle}
                      onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                      placeholder="e.g. AI-assisted visuals for YouTube and Reels"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#101A11] border border-[#1F3A22] text-[#F5F5EF] text-sm focus:outline-none focus:border-[#A8F542]"
                    />
                  </div>
                </div>

                {/* Video URL or Local Upload */}
                <div className="p-4 rounded-2xl bg-[#0D180F] border border-[#19301D] space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-mono-code text-[#A8F542] uppercase font-bold flex items-center gap-1.5">
                      <Film className="w-3.5 h-3.5" />
                      VIDEO SOURCE (MP4 OR CLOUD URL)
                    </label>
                    <label className="text-[11px] font-mono-code text-[#A8F542] hover:underline cursor-pointer flex items-center gap-1">
                      <Upload className="w-3.5 h-3.5" />
                      Upload MP4 File
                      <input
                        type="file"
                        accept="video/mp4,video/webm,video/quicktime"
                        className="hidden"
                        onChange={handleVideoUpload}
                      />
                    </label>
                  </div>
                  <input
                    type="text"
                    value={formData.videoUrl}
                    onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
                    placeholder="https://.../video.mp4 or local path"
                    className="w-full px-3.5 py-2 rounded-xl bg-[#101A11] border border-[#1F3A22] text-[#F5F5EF] text-xs font-mono-code focus:outline-none focus:border-[#A8F542]"
                  />
                </div>

                {/* Thumbnail Image URL or Upload */}
                <div className="p-4 rounded-2xl bg-[#0D180F] border border-[#19301D] space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-mono-code text-[#A8F542] uppercase font-bold flex items-center gap-1.5">
                      <ImageIcon className="w-3.5 h-3.5" />
                      THUMBNAIL IMAGE (URL OR UPLOAD)
                    </label>
                    <label className="text-[11px] font-mono-code text-[#A8F542] hover:underline cursor-pointer flex items-center gap-1">
                      <Upload className="w-3.5 h-3.5" />
                      Upload Image File
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleThumbnailUpload}
                      />
                    </label>
                  </div>
                  <input
                    type="text"
                    value={formData.thumbnail}
                    onChange={(e) => setFormData({ ...formData, thumbnail: e.target.value })}
                    placeholder="https://.../image.jpg"
                    className="w-full px-3.5 py-2 rounded-xl bg-[#101A11] border border-[#1F3A22] text-[#F5F5EF] text-xs font-mono-code focus:outline-none focus:border-[#A8F542]"
                  />
                  {formData.thumbnail && (
                    <div className="flex items-center gap-3">
                      <img
                        src={formData.thumbnail}
                        alt="Preview"
                        className="w-20 h-12 object-cover rounded-lg border border-white/10"
                      />
                      <span className="text-[10px] font-mono-code text-[#A7B3A1]">
                        Thumbnail Preview
                      </span>
                    </div>
                  )}
                </div>

                {/* Duration & Resolution */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-mono-code text-[#CBD7C8] mb-1 uppercase">
                      DURATION
                    </label>
                    <input
                      type="text"
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                      placeholder="01:30"
                      className="w-full px-3.5 py-2 rounded-xl bg-[#101A11] border border-[#1F3A22] text-[#F5F5EF] text-xs font-mono-code"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono-code text-[#CBD7C8] mb-1 uppercase">
                      RESOLUTION
                    </label>
                    <input
                      type="text"
                      value={formData.resolution}
                      onChange={(e) => setFormData({ ...formData, resolution: e.target.value })}
                      placeholder="4K UHD 60FPS"
                      className="w-full px-3.5 py-2 rounded-xl bg-[#101A11] border border-[#1F3A22] text-[#F5F5EF] text-xs font-mono-code"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono-code text-[#CBD7C8] mb-1 uppercase">
                      TAGS (COMMA SEPARATED)
                    </label>
                    <input
                      type="text"
                      value={formData.tags}
                      onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                      placeholder="AI Video, Reels, 4K"
                      className="w-full px-3.5 py-2 rounded-xl bg-[#101A11] border border-[#1F3A22] text-[#F5F5EF] text-xs font-mono-code"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono-code text-[#CBD7C8] mb-1 uppercase">
                    FULL PROJECT DESCRIPTION
                  </label>
                  <textarea
                    rows={3}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Details about client goals, pacing, AI models used, and visual highlights..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#101A11] border border-[#1F3A22] text-[#F5F5EF] text-xs resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#182C1B]">
                  <button
                    type="button"
                    onClick={() => setActiveTab('list')}
                    className="px-4 py-2.5 rounded-xl bg-[#101A11] text-[#A7B3A1] hover:text-[#F5F5EF] text-xs font-mono-code cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-[#A8F542] text-[#071109] font-space text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(168,245,66,0.4)] hover:bg-[#bbf85d] transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <Save className="w-4 h-4" />
                    <span>{editingId ? 'SAVE CHANGES' : 'CREATE & PUBLISH PROJECT'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
