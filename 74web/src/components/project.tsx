import { motion, AnimatePresence } from "framer-motion";

interface Creative {
  role: string;
  name: string;
}

interface ProjectType {
  projectName: string;
  description: string;
  creatives: Creative[];
  link: string;
  text: string;
}

interface ProjectProps {
  project: ProjectType | undefined;
}

export const Project = ({ project }: ProjectProps) => {
  if (!project) return null;

  return (
    <div className="min-h-screen flex flex-col w-1/2 text-white pb-8 px-8 overflow-y-auto max-h-screen">
      <AnimatePresence mode="wait">
        <motion.div
          className="pt-[10%]"
          key={project.projectName}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div>
            <h1 className="font-semibold">{project.projectName}</h1>
            <h2 className="italic pb-8">{project.description}</h2>
          </div>
          <div>
            {project.creatives.map((creative, index) => (
              <h2 key={index} className="italic">
                {creative.role}: {creative.name}
              </h2>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1 }}
          >
            <iframe
              loading="lazy"
              className="w-full aspect-video block bg-inherit mt-8"
              src={project.link}
              title={project.projectName}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.5 }}
          >
            <p className="pt-4">{project.text}</p>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
