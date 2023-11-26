function getLogoPath(filename: string): string {
  filename = filename.toLowerCase();
  if (filename === 'scss' || filename === 'sass' || filename === 'css3') {
    filename = 'css';
  } else if (filename === 'jupyter notebook') {
    filename = 'jupyter';
  }
  return `/assets/logos/${filename}.svg`;
}

export default getLogoPath;
