import { useQuery } from 'react-query';
import { useState } from 'react';
import { Query } from '@/lib/dataSource/enums/query';
import { searchProjects } from '@/lib/dataSource/features/projects/implementation/searchProjects';

export function useSearchProjects(term: string) {
  const [internalTerm, setTerm] = useState<string>(term);

  const query = useQuery<Project[]>(
    [Query.SEARCH_PROJECTS, internalTerm],
    async (values): Promise<Project[]> => {
      const term = values.queryKey[1];
      if (!term) {
        return [];
      }

      if (typeof term === 'string') {
        return await searchProjects(term);
      }

      throw new Error("'term' must be of type string");
    },
    {
      staleTime: 0,
    },
  );

  return {
    query,
    updateTerm: (term: string) => setTerm(term),
  };
}
