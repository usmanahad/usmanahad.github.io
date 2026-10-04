# Portfolio project assets

These public PDFs and figures mirror the source `../Projects/` folder in UniversityApplications. Each project retains its original filenames. The portfolio reads these paths through `_data/research.yml`; the PDF reader supports the four project PDFs.

To refresh the website assets after changing the source files, run from the website repository:

```sh
rsync -a ../Projects/VisConf ../Projects/PARDA ../Projects/FedCPR ../Projects/WatchTower Projects/
```

Review the changes, build/test the site, then commit and push. Files in this repository are public on GitHub Pages; only add material intended for publication. Update `_data/research.yml` if a filename, figure, caption, or result changes.
