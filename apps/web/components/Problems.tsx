"use client";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@repo/ui/table";
import { getColor } from "../app/db/problem";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@repo/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SkeletonTable } from "./skeletons/problems";

export interface Problem {
  id: string;
  title: string;
  difficulty: string;
  solved: number;
}

const ITEMS_PER_PAGE = 10;

const Problems = ({ problems }: any) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastProblem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstProblem = indexOfLastProblem - ITEMS_PER_PAGE;
  const currentProblems = problems.slice(indexOfFirstProblem, indexOfLastProblem);

  const totalPages = Math.ceil(problems.length / ITEMS_PER_PAGE);
  const handleRoute = (id: string) => {
    router.push(`/problem/${id}`);
  };
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="bg-darkgray py-8 md:py-12 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white">Coding Problems</h2>
          <p className="text-white mb-3">
            Strengthen your ML concepts by coding in pure Python
          </p>
        </div>
        <div className="overflow-x-auto">
          {loading ? (
            <SkeletonTable />
          ) : (
            <>
              <ProblemCard problems={currentProblems} handleRoute={handleRoute} />
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

function ProblemCard({
  problems,
  handleRoute,
}: {
  problems: Problem[];
  handleRoute: (id: string) => void;
}) {
  return (
    <div className="overflow-x-auto">
      <Table className="min-w-full rounded-lg overflow-hidden">
        <TableHeader className="bg-darkgray">
          <TableRow className="hover:bg-mediumgray hover:bg-transparent">
            <TableHead className="text-gray-300">S.No</TableHead>
            <TableHead className="text-gray-300">Title</TableHead>
            <TableHead className="text-gray-300">Difficulty</TableHead>
            <TableHead className="text-gray-300">Submissions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {problems.map((problem: Problem, index: number) => (
            <TableRow
              key={problem.id}
              className="hover:bg-lightgray hover:cursor-pointer"
              onClick={() => handleRoute(problem.id)}
            >
              <TableCell className="text-white">{index + 1}</TableCell>
              <TableCell className="text-white">{problem.title}</TableCell>
              <TableCell className={`text-white ${getColor(problem.difficulty)}`}>
                {problem.difficulty}
              </TableCell>
              <TableCell className="text-white">{problem.solved}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center mt-8">
      <Button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="mr-3 bg-transparent text-white hover:bg-mediumgray"
      >
        <ChevronLeft />
        Previous
      </Button>
      <span className="text-white mt-2">
        {currentPage} of {totalPages}
      </span>
      <Button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="ml-3 text-white bg-transparent hover:bg-mediumgray"
      >
        Next
        <ChevronRight />
      </Button>
    </div>
  );
}

export default Problems;
